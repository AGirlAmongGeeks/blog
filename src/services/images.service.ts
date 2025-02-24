import * as contentful from 'contentful';

type ImageOptions = {
  width?: number;
  height?: number;
  fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
  radius?: number;
};

class ImagesService {
  getImage(asset: contentful.Asset, options: ImageOptions = {}): string {
    const params = new URLSearchParams({
      ...(options?.width && { w: options?.width.toString() }),
      ...(options?.height && { h: options?.height.toString() }),
      ...(options?.fit && { fit: options?.fit }),
      ...(options?.radius && { r: options?.radius.toString() }),
    });

    return `${asset.fields.file?.url}?${params.toString()}`;
  }
}

const imagesService = new ImagesService();

export default imagesService;
