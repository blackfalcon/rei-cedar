import {play} from 'vue-play';
import Anchor from './Anchor';


play(Anchor)
  .name( 'cdr-anchor' )
  .displayName( 'Anchor' )
  .add( 'cdr-link', '<cdr-anchor hypertextReference="#" className="cdr-link">Sample link</cdr-anchor>' )
  .add( 'cdr-link--standalone', '<cdr-anchor hypertextReference="#" className="cdr-link cdr-link--standalone">Sample standalone link</cdr-anchor>' );
