import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model () {
    return ['Bill Gates', 'Steve Wozniak', 'John Carmack']
  }
}
