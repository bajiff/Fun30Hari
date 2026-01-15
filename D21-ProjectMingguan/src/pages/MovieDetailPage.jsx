// ? Ini Page MovieDetailPage

import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const {slug} = useParams();
  return (
    <section className="flex items-center justify-center mt-10">
      <section>
        Judul Film {slug}
      </section>
    </section>
  )
}

export default MovieDetailPage;