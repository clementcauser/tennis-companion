import { Button, TextInput } from 'libs/uikit/src';
import { useId } from 'react';

const test = () => {
  return (
    <div>
      <TextInput
        label="Adresse email"
        onChange={console.log}
        value=""
        placeholder="hello world"
        error="fsjpfjspdofj fposdj fpsd"
      />
      <Button variant="outlined">Submit</Button>
    </div>
  );
};

export default test;
