import { Typograph } from "../../../../shared/components/Typograph/Typograph";
import { Button, Title } from "./Contact.styled";


export const Contact = () =>{
    return (
      <div>
        <h1 className="text-white">Contact</h1>
        <Typograph size="large" className="text-warning">
          Contact
        </Typograph>

        <Title>Hello World</Title>

        <div>
          <Button>Normal</Button>
          <Button $primary>Primary</Button>
          <Button color="red">Test</Button>
        </div>
      </div>
    );
}