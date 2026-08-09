

function AllProduct({ title, price, thumbnail, description, availability }) {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex flex-wrap">
                        {title}

                        <div className="badge badge-secondary">{availability}</div>
                        <p>${price}</p>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-xs sm:btn-sm md:btn-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                        </button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProduct
