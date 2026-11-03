import { TestBed } from '@angular/core/testing';

import { StoriesService } from './stories.service';

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should include the 2026 SDG story as a custom story', () => {
    const story = service.getStoriesByID(6);
    expect(story.story_tag).toBe('sdg2026');
    expect(story.story_custom).toBe(true);
    expect(story.story_title).toContain('2030');
  });
});
