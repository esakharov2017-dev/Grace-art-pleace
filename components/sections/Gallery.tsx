"use client";

import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { SectionDescription } from "../ui/SectionDescription";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F7F5F1]">
      <Container>
        <div className="mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-[#B59672] uppercase mb-6">
            Галерея
          </p>
          <SectionTitle>Наше пространство</SectionTitle>
          <div className="mt-6">
            <SectionDescription>
              Интерьер, созданный для комфорта мастеров и их клиентов.
            </SectionDescription>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}