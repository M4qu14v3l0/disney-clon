import { Header } from "@/components/shared/navbar/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="">
      <Header />
      {children}
    </body>
  );
}
