export interface UserType {
  name: string;
  info: UserInfoProps[];
  subDescription: DescriptionProps[];
}

export interface UserInfoProps {
  title: string;
  type: "email" | "tel" | "SNS";
  clickAble: boolean;
  url: {
    base: string;
    context: string;
  };
}

export interface DescriptionProps {
  title: string;
  context: string;
  url: string | undefined;
}
