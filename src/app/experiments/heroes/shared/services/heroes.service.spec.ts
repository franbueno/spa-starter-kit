import {
  inject,
  addProviders
} from '@angular/core/testing';

import {HeroesService} from './heroes.service';
import { HEROES } from './heroes.mock';

describe('HeroService', () => {

  beforeEach(function() {
    addProviders([HeroesService]);
  });

  it('should have name property set', inject( [HeroesService], (api: HeroesService) => {
    api.getHeroes().then((hs) => {
      expect(hs).toBe(HEROES);
    });
  }))
});

