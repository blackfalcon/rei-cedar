import { mount } from 'avoriaz';
import inputComp from '@/components/forms/Input';

function validateFn(inputText) {
  const obj = {};
  if (inputText === 'hi') {
    obj.state = 'valid';
  } else if (inputText === '') {
    obj.state = 'warn';
    obj.message = 'Warning Message';
  } else if (!isNaN(inputText) && inputText !== '') {
    obj.state = 'error';
    obj.message = 'Error Message';
  } else {
    obj.state = 'error';
    obj.message = 'Error Message 2';
  }
  return obj;
}

describe('Input.vue', () => {
  it('renders label correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      label: 'Label Test',
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test');
  });

  it('renders required label correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      label: 'Label Test',
      required: true,
    });
    expect(wrapper.vm.$refs.label.textContent).to.equal('Label Test*');
  });

  it('maps input id to label for correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      label: 'testing',
      id: 'test',
    });
    expect(wrapper.vm.$refs.input.id).to.equal(wrapper.vm.$refs.label.htmlFor);
  });

  it('sets input name attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      label: 'Label Test',
      name: 'testing',
    });
    expect(wrapper.vm.$refs.input.name).to.equal('testing');
  });

  it('renders input value correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 'testing',
      },
    });
    expect(wrapper.vm.$refs.input.value).to.equal('testing');
  });

  it('sets input disabled attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      disabled: true,
    });
    expect(wrapper.vm.$refs.input.getAttribute('disabled')).to.equal('');
  });

  it('sets input readonly attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      readonly: true,
    });
    expect(wrapper.vm.$refs.input.getAttribute('readonly')).to.equal('readonly');
  });

  it('sets input required attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      required: true,
    });
    expect(wrapper.vm.$refs.input.getAttribute('required')).to.equal('');
  });

  it('sets input autofocus attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      autofocus: true,
    });
    expect(wrapper.vm.$refs.input.getAttribute('autofocus')).to.equal('');
  });

  it('sets input maxlength attribute correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      maxlength: 20,
    });
    expect(wrapper.vm.$refs.input.getAttribute('maxlength')).to.equal('20');
  });

  it('sets input placeholder correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      placeholder: 'test placeholder',
    });
    expect(wrapper.vm.$refs.input.getAttribute('placeholder')).to.equal('test placeholder');
  });

  it('sets multiline to textarea correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      multiLine: true,
    });
    expect(wrapper.vm.$refs.input.tagName).to.equal('TEXTAREA');
  });

  it('sets multiline rows correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      multiLine: true,
      rows: 10,
    });
    expect(wrapper.vm.$refs.input.getAttribute('rows')).to.equal('10');
  });

  it('sets default input type correctly', () => {
    const wrapper = mount(inputComp);
    expect(wrapper.vm.$refs.input.getAttribute('type')).to.equal('text');
  });

  it('overrides input type correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      type: 'url',
    });
    expect(wrapper.vm.$refs.input.getAttribute('type')).to.equal('url');
  });

  it('sets input tabindex correctly', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      tabindex: 2,
    });
    expect(wrapper.vm.$refs.input.getAttribute('tabindex')).to.equal('2');
  });

  it('debounce 0 when not defined', () => {
    const wrapper = mount(inputComp);
    expect(wrapper.vm.debounceVal).to.equal(0);
  });

  it('sets default debounce', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      debounce: true,
    });
    expect(wrapper.vm.debounceVal).to.equal(500);
  });

  it('sets override debounce', () => {
    const wrapper = mount(inputComp);
    wrapper.setProps({
      debounce: 1000,
    });
    expect(wrapper.vm.debounceVal).to.equal(1000);
  });

  it('auto generates an id', () => {
    const wrapper = mount(inputComp);
    expect(wrapper.vm.inputId)
      .to.equal(wrapper.vm._uid); // eslint-disable-line no-underscore-dangle
  });

  it('validates errors', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isErr).to.equal(true);
    }, 0);
  });

  it('renders error messages correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 4,
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('Error Message');
    }, 0);
  });

  it('validates warnings', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: '',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isWarn).to.equal(true);
    }, 0);
  });

  it('renders warning messages correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: '',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('Warning Message');
    }, 0);
  });

  it('validates successfully', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 'hi',
        rules: [validateFn],
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isValid).to.equal(true);
    }, 0);
  });

  it('validates pattern successfully', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 'hi-2\'@#+%&',
        pattern: '[a-zA-Z0-9-s\'/@#+&%]+',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isValid).to.equal(true);
    }, 0);
  });

  it('errors on pattern correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 'hi-2;',
        pattern: '[a-zA-Z0-9-s\'/@#+&%]+',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.isErr).to.equal(true);
    }, 0);
  });

  it('displays pattern errors correctly', () => {
    const wrapper = mount(inputComp, {
      propsData: {
        value: 'hi-2;',
        pattern: '[a-zA-Z0-9-s\'/@#+&%]+',
        patternError: 'pattern error',
      },
    });
    wrapper.vm.validate(true);
    setTimeout(() => {
      expect(wrapper.vm.$refs.error.textContent).to.equal('pattern error');
    }, 0);
  });
});
