import React from "react"
import { Helmet } from "react-helmet"

import ResourcesIll from "../../assets/animated_illustrations/resources.json"
import { useCollection } from "../../hooks/useCollection"
import Hero from "../dashboard/Hero"
import SkeletonResourceCard from "../skeletons/SkeletonResourceCard"

import ResourceCard from "./ResourceCard"

const Resources = () => {
  const { documents, isLoading } = useCollection("resources", null, null, [
    "createdAt",
    "desc",
  ])
  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <Helmet>
        <title>Resources - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="Here you can find all the frontend and backend development resources."
        subTitle="Welcome To Coding Space 😊"
        mainImg={ResourcesIll}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
      />
      <h2 className="text-5xl text-center text-white font-bold  font-heading">
        Resources
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-8">
        {!isLoading
          ? documents.map((resource) => {
              return <ResourceCard key={resource.id} resource={resource} />
            })
          : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonResourceCard key={n} />)}
      </div>
    </div>
  )
}

export default Resources
