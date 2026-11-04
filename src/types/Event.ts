import WithId from './WithId';
import WithMetadata from './WithMetadata';

type Event = WithId &
  WithMetadata & {
    category: string;
    cancellable: boolean;
    slot?: number;
    page?: number;
  };

export default Event;
