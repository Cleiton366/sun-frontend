import MainBanner from "@/components/main-banner";
import Header from "@/components/header";
import Form from "@/components/form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <MainBanner />
      <Form />
      <Footer />
    </main>
  );
}
