export interface FlowerEntity {
  id?: string;
  name: string;
  species?: string;
  info?: string;
  wateredAt: string;
  replantedAt?: string | null;
  fertilizedAt?: string | null
  wateringInterval: number;
  isMailSent: boolean;
  nextWateringAt: string;
  userId: string;
}

export interface FlowerEntityRes {
  data: FlowerEntity;
}

export type FLowerUpdateDateReq = Pick<FlowerEntity, 'userId' | 'wateredAt'>;

export type CreateFlowerReq = Omit<FlowerEntity, 'id' | 'userId' >;

export type FlowerEditForm = Omit<FlowerEntity, 'id' | 'userId' | 'isMailSent' >;

export enum FlowerUpdateForm {
  name = 'name',
  wateredAt = 'wateredAt',
  info = 'info',
  species = 'species',
  replantedAt = 'replantedAt',
  fertilizedAt = 'fertilizedAt',
  wateringInterval = 'wateringInterval',
}
