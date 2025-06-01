import { httpResource } from '@angular/common/http';

export const galleryResource = httpResource<any>(() => {
  return 'http://localhost:3000/api/gallery';
});

// export const galleryResource = httpResource<any>({
//   url: 'http://localhost:3000/api/gallery',
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
