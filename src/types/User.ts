export interface UserType {
  name: string;
  info: UserInfoProps[];
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
