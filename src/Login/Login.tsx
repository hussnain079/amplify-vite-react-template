import {
  Button,
  Flex,
  Text,
  Input,
  Label,
  CheckboxField,
  Link,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Section from "../assets/Section.png";
import Star from "../assets/star.png";

const Login = () => {
  return (
    <Flex
      direction={{ base: "column", large: "row" }}
      width="100%"
      className="login"
    >
      <Flex
        direction="column"
        width={{ base: "100%", large: "80%" }}
        padding={{ base: "0rem 1rem", large: "6rem 4rem" }}
        className="singUp__page"
      >
        <div className="text-center">
          <Image src={Star} alt="Logo Here..." width="125px" />
        </div>
        <Text className="text-center">
          <b>Welcome back</b>
        </Text>
        <Text className="text-center">
          Welcome back! Please enter your details
        </Text>
        <Flex direction="column" width="75%" gap="small" alignSelf="center">
          <Label htmlFor="email">
            <b>Email</b>
          </Label>
          <Input id="email" name="email" placeholder="olivia@acme.com" />
        </Flex>
        <Flex direction="column" width="75%" gap="small" alignSelf="center">
          <Label htmlFor="password">
            <b>Password</b>
          </Label>
          <Input id="Password" name="Password" placeholder="********" />
        </Flex>
        <Flex
          direction="row"
          width="75%"
          justifyContent="space-between"
          alignSelf="center"
        >
          <CheckboxField label="Remember me" name="Remember me" value="yes" />
          <Link href="/" color="blue">
            Forget Password
          </Link>
        </Flex>
        <Flex direction="column" width="75%" gap="small" alignSelf="center">
          <Link href="/dashboard" className="text-center" color="#fff">
            <Button variation="primary" colorTheme="info" className="w-100">
              Sign In
            </Button>
          </Link>
        </Flex>
        <Flex direction="column" width="100%" className="text-center">
          <Text>
            Don't have an account?
            <Link href="/" color="blue">
              &nbsp; Request Access
            </Link>
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        display={{ base: "none", large: "flex" }}
        width="60%"
        overflow="hidden"
      >
        <Image
          src={Section}
          alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
          height="90%"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

export default Login;
