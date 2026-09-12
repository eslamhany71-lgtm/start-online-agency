import { getDictionary } from "../../../dictionaries/getDictionary";
import ContactClient from "./ContactClient";

export default async function ContactPage({ params: { locale } }: { params: { locale: 'en' | 'ar' } }) {
  const dict = await getDictionary(locale);
  return <ContactClient dict={dict.contact} />;
}