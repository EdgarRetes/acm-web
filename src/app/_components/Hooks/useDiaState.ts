import { useState } from 'react';
import { Moment } from 'moment';

interface DiaState {
  dia: Moment | null;
  setDia: (date: Moment) => void;
}

const useDiaState = (): DiaState => {
  const [dia, setDia] = useState<Moment | null>(null);

  return { dia, setDia };
};

export default useDiaState;