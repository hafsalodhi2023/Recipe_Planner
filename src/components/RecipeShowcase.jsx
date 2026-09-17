import Title from "./common/Title";
import Button from "./common/Button";

import { PiStarFourFill } from "react-icons/pi";
import { FaClock, FaLongArrowAltRight } from "react-icons/fa";
import { VscImportantCompact } from "react-icons/vsc";
import { recipes } from "../Data/Recipes";

const ingredients = [
  { emoji: "🥕", name: "Carrot" },
  { emoji: "🍅", name: "Tomato" },
  { emoji: "🧅", name: "Onion" },
  { emoji: "🥔", name: "Potato" },
  { emoji: "🍗", name: "Chicken" },
];

function RecipeShowcase() {
  return (
    <div className="px-6 sm:px-8 xl:px-20 w-full mt-30">
      <Title
        eyebrow={"YOUR KITCHEN, YOUR INGREDIENTS"}
        eyebrowIcon={<PiStarFourFill />}
        heading={"What's in your kitchen today?"}
        description={
          "Start with what you have. We'll help you figure out the rest."
        }
      />

      <div className="relative mt-15 max-w-4xl mx-auto px-6 py-8 rounded-4xl bg-subtle-cream/50 border border-primary-olive/10 flex flex-col gap-6">
        <div className="right_circle absolute w-20 h-20 bg-subtle-beige/50 right-0 top-0 rounded-[0_32px_0_80px]" />
        <div className="w-full flex items-center justify-between z-3">
          <div className="">
            <p className="text-xs font-medium tracking-widest uppercase text-primary-olive">
              WHAT'S IN THE FRIDGE?
            </p>
            <h3 className="mt-1 text-xl font-semibold text-subtle-olive">
              Your ingredients
            </h3>
          </div>
          <span className="text-4xl">🧺</span>
        </div>
        <div className="w-full flex items-center flex-wrap gap-4 z-3">
          {ingredients.map((ingredient, idx) => (
            <button
              className="group flex items-center gap-2.5 rounded-2xl border border-primary-olive/30 px-4 py-3 text-sm font-medium text-subtle-olive bg-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-olive/50"
              key={idx}
            >
              <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                {ingredient.emoji}
              </span>
              <span>{ingredient.name}</span>
            </button>
          ))}
          <button className="flex items-center gap-2 rounded-2xl border border-dashed border-primary-olive/50 px-4 py-3 text-sm font-medium text-primary-olive hover:bg-white/50 hover:text-subtle-olive transition">
            <span>+</span>
            Add Ingredient
          </button>
        </div>
        <div className="border-t border-subtle-olive/10" />
        <div className="w-full flex flex-col items-start md:flex-row md:items-center md:justify-between z-3">
          <div className="">
            <p className="text-sm font-medium text-subtle-olive">
              Got your ingredients?
            </p>
            <p className="mt-1 text-xs text-primary-olive">
              Let's turn them into something delicious
            </p>
          </div>
          <Button
            text={"FIND RECIPES"}
            icon={<FaLongArrowAltRight />}
            style={"bold"}
            hover={"bold"}
            customStyle={"w-fit mt-3 md:mt-0"}
            to={"/recipes"}
          />
        </div>
        <div className="arrow arrow_mobile absolute w-20 h-35 bg-(image:--mobile-recipeShowcase-arrow) bg-no-repeat bg-contain left-[50%] -bottom-38 translate-x-[-50%] xl:hidden" />
        <div className="arrow arrow_desktop absolute w-50 h-50 bg-(image:--dsk-recipeShowcase-arrow) bg-no-repeat bg-contain -right-10 -bottom-60 rotate-25 hidden xl:block" />
      </div>

      <div className="mt-40 w-full ">
        <Title
          heading={"Here's what you could make. 🍲"}
          eyebrow={"YOUR POSSIBILITIES"}
          eyebrowIcon={<VscImportantCompact />}
        />
        <div className="w-full flex items-center justify-center gap-10 flex-wrap mt-15">
          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              className="group bg-subtle-cream/50 w-90 rounded-3xl overflow-hidden hover:shadow-sm border border-primary-olive/50 transition-shadow delay-50"
            >
              <div className="relative w-full h-60 ">
                <img
                  src={recipe.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform "
                />
                <div className="overlay absolute top-0 left-0 z-2 overlay w-full h-full bg-linear-to-t from-black/20 to-transparent group-hover:scale-105 transition-transform" />
                <p className="absolute bottom-4 left-4 z-3 flex items-center gap-2 rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-subtle-olive shadow-sm group-hover:-translate-y-0.5 transition-transform delay-50">
                  <FaClock className="" />
                  {recipe.time}
                </p>
              </div>
              <div className="w-full px-4 py-6 ">
                <p className="text-xs font-bold tracking-widest uppercase text-subtle-olive">
                  AI SUGGESTION
                </p>
                <h3 className="mt-2 font-fraunces text-2xl font-semibold text-dark-olive">
                  {recipe.title}
                </h3>
                <p className="flex items-center gap-3 text-xs font-medium text-subtle-olive mt-2">
                  <span>{recipe.category}</span>
                  <span>.</span>
                  <span>{recipe.meal}</span>
                </p>
                <div className="w-full flex items-center gap-3 mt-2">
                  {recipe?.ingredients?.map((ingredient, index) => (
                    <span
                      key={index}
                      className="p-2 rounded-xl bg-subtle-beige"
                    >
                      {ingredient}
                    </span>
                  ))}
                  <span className="ml-1 text-xs font-medium text-subtle-olive">
                    + more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeShowcase;
