import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Maria Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}
