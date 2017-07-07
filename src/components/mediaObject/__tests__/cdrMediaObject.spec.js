import { mount } from 'avoriaz';
import cdrMediaObject from '@/components/media/cdrMediaObject';

describe('cdrMediaObject.vue', () => {
  it('renders a media Object', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
      }
    });
    expect(wrapper.is('div')).to.equal(true);
  });

  it('allows the media figure to accept a URL', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
      }
    });
    expect(wrapper.vm.$props.mediaFigure).to.equal('http://via.placeholder.com/350x150');
  });
  it('renders an image', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
      }
    });
    const img = wrapper.find('img')[0];
    expect(img.is('img')).to.equal(true);
    expect(img.hasClass('cdr-media-object__figure')).to.equal(true);
  });
  it('allows a heading lvl to be selected', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
        mediaTitle: 'test title',
        level : '6',
      }
    });
    const heading = wrapper.find('h6')[0];
    expect(heading.is('h6')).to.equal(true);
  });
  it('aligns an image to the top', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
        modifier: 'top',
      }
    });
    expect(wrapper.hasClass('cdr-media-object--top')).to.equal(true);
  });
  it('allows multiple modifier classes to be passed', () => {
    const wrapper = mount(cdrMediaObject, {
      propsData: {
        mediaFigure: 'http://via.placeholder.com/350x150',
        modifier: 'top center',
      }
    });
    expect(wrapper.hasClass('cdr-media-object--top')).to.equal(true);
    expect(wrapper.hasClass('cdr-media-object--center')).to.equal(true);
  });
});


