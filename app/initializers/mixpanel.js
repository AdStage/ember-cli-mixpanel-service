export function initialize() {
  let application = arguments[1] || arguments[0];
  application.inject('service:tracking', 'mixpanel', 'service:mixpanel');
}

export default {
  name: 'mixpanel',
  initialize: initialize
};
