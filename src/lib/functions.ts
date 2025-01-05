export function telFormatter(tel: string) {
  return "+82 10-" + tel.substring(3, 7) + "-" + tel.substring(7, tel.length);
}

export function mailtoFormatter(email: string) {
  return `mailto:${email}?body=안녕하세요.메일본문입니다.%0A%0A%0A%0A%0A-------------------------------------%0AAA에서 작성된 메일입니다.`;
}
