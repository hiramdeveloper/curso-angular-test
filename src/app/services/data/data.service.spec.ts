import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IPost } from '../../shared/interfaces/ipost';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe de probar el servicio GET', () => {
    const dummyPosts: IPost[] = [
      {
        id: 1,
        userId: '1',
        title: 'Titulo 1',
        body: 'Este sera el body 1',
      },
      {
        id: 2,
        userId: '2',
        title: 'Titulo 2',
        body: 'Este sera el body 2',
      }
    ];

    service.getDataPost().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    })
  });
});
