import Link from "next/link";
export default function ServicesPage({ slug }) {
    return (
        <Link href={`/blog/${slug}`}>НУННУ</Link>
    )
    ;
  }
  