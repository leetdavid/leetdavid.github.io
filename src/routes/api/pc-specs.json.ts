import type { PCSpecs } from '$lib/types';

export const get = async () => {
  return {
    case: 'Lian Li O11 Dynamic EVO',
    storage: ['Samsung 990 Pro 2TB'],
    motherboard: 'Asus ROG Crosshair X670E Hero',
    cpu: 'AMD Ryzen 9 7950X3D',
    gpu: 'Asus TUF Gaming RTX 4090 24GB',
    cooler: 'EK AIO 280 D-RGB',
    ram: ['G.SKILL Trident Z5 Neo 64GB CL32'],
    mouse: 'Zaunkoenig M2K',
    keyboard: 'Wooting 60HE with Tofu60 Redux Case',
    monitor: ['Samsung 34" Odyssey G8 OLED'],
  } satisfies PCSpecs;
};
