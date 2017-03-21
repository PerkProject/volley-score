import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../stories/scoreboard');
  require('../stories/checkbox');
  require('../stories/colorpicker');
}

configure(loadStories, module);
