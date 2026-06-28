export type Creator = {
  id: string
  name: string
  handle: string
  avatar: string
  verified?: boolean
  followers: string
  specialty: string
}

export type Post = {
  id: string
  creator: Creator
  image: string
  aspect: "portrait" | "square"
  title: string
  prompt: string
  negativePrompt?: string
  model: string
  tools: string[]
  seed?: string
  steps?: number
  cfg?: number
  likes: number
  comments: number
  saves: number
  remixes: number
  timeAgo: string
  topComment?: { handle: string; text: string }
}

export const creators: Record<string, Creator> = {
  nova: {
    id: "nova",
    name: "Nova Reyes",
    handle: "novarenders",
    avatar: "/avatars/nova.png",
    verified: true,
    followers: "184K",
    specialty: "Surreal worlds",
  },
  kai: {
    id: "kai",
    name: "Kai Mercer",
    handle: "kaipromptlab",
    avatar: "/avatars/kai.png",
    verified: true,
    followers: "96.2K",
    specialty: "Cinematic portraits",
  },
  luma: {
    id: "luma",
    name: "Luma Ortega",
    handle: "lumastudio",
    avatar: "/avatars/luma.png",
    verified: false,
    followers: "42.8K",
    specialty: "3D & product",
  },
  orion: {
    id: "orion",
    name: "Orion Vale",
    handle: "orionvale",
    avatar: "/avatars/orion.png",
    verified: true,
    followers: "211K",
    specialty: "Fantasy concept art",
  },
  echo: {
    id: "echo",
    name: "Echo Lin",
    handle: "echodreams",
    avatar: "/avatars/echo.png",
    verified: false,
    followers: "31.5K",
    specialty: "Synthwave & retro",
  },
  sol: {
    id: "sol",
    name: "Sol Amara",
    handle: "solmacro",
    avatar: "/avatars/sol.png",
    verified: true,
    followers: "127K",
    specialty: "Macro & abstract",
  },
}

export const posts: Post[] = [
  {
    id: "p1",
    creator: creators.nova,
    image: "/art/floating-city.png",
    aspect: "portrait",
    title: "Citadel of the Drifting Isles",
    prompt:
      "a colossal floating island city at golden hour, glowing waterfalls cascading off the rocky edges into clouds below, intricate ancient architecture, warm orange and teal cinematic lighting, volumetric god rays, ultra detailed matte painting, epic scale, 8k",
    negativePrompt: "blurry, low contrast, text, watermark, oversaturated",
    model: "Midjourney v6.1",
    tools: ["Midjourney", "Magnific upscale"],
    seed: "1284491203",
    steps: 50,
    cfg: 7,
    likes: 24817,
    comments: 612,
    saves: 8934,
    remixes: 341,
    timeAgo: "2h",
    topComment: {
      handle: "orionvale",
      text: "the light study here is unreal. saved for reference 🔥",
    },
  },
  {
    id: "p2",
    creator: creators.kai,
    image: "/art/neon-portrait.png",
    aspect: "portrait",
    title: "Rainfall // 02:14 AM",
    prompt:
      "cyberpunk neon street portrait of a young woman wearing reflective sunglasses, rain-soaked city at night, teal and amber neon reflections on wet skin, shallow depth of field, cinematic moody lighting, photographic, shot on 85mm, hyperrealistic",
    negativePrompt: "cartoon, deformed hands, extra fingers, plastic skin",
    model: "FLUX.1 [dev]",
    tools: ["FLUX", "ComfyUI"],
    seed: "77120044",
    steps: 28,
    cfg: 3.5,
    likes: 18204,
    comments: 433,
    saves: 6120,
    remixes: 188,
    timeAgo: "5h",
    topComment: {
      handle: "echodreams",
      text: "the reflections are doing so much work here, gorgeous",
    },
  },
  {
    id: "p3",
    creator: creators.luma,
    image: "/art/liquid-metal.png",
    aspect: "square",
    title: "Chrome Study No. 7",
    prompt:
      "abstract liquid chrome metal sculpture flowing in zero gravity, soft three-point studio lighting on a cream seamless background, reflective iridescent surface with subtle teal tint, minimal premium product render, octane, ray tracing",
    model: "Stable Diffusion 3.5 L",
    tools: ["SD 3.5", "Krea"],
    seed: "9931220",
    steps: 40,
    cfg: 5,
    likes: 9421,
    comments: 207,
    saves: 4102,
    remixes: 96,
    timeAgo: "8h",
  },
  {
    id: "p4",
    creator: creators.orion,
    image: "/art/forest-spirit.png",
    aspect: "portrait",
    title: "Guardian of the Mosswood",
    prompt:
      "ethereal glowing forest spirit creature woven from light and living moss, standing in a misty ancient forest, bioluminescent particles drifting through air, magical atmosphere, fantasy concept art, teal and warm green palette, highly detailed, artstation trending",
    negativePrompt: "humanlike face, modern objects, text",
    model: "Midjourney v6.1",
    tools: ["Midjourney", "Photoshop"],
    seed: "5520981",
    steps: 50,
    cfg: 8,
    likes: 31256,
    comments: 884,
    saves: 12740,
    remixes: 502,
    timeAgo: "11h",
    topComment: {
      handle: "novarenders",
      text: "the particle density is perfect. what upscaler did you use?",
    },
  },
  {
    id: "p5",
    creator: creators.echo,
    image: "/art/retro-car.png",
    aspect: "portrait",
    title: "Last Exit, Highway 9",
    prompt:
      "retro-futuristic chrome sports car driving through a vast empty desert at sunset, dramatic long shadows, warm amber sky with teal accents, synthwave aesthetic, cinematic wide shot, film grain, anamorphic lens flare",
    model: "FLUX.1 [dev]",
    tools: ["FLUX", "Topaz"],
    seed: "3041992",
    steps: 30,
    cfg: 3.5,
    likes: 14098,
    comments: 356,
    saves: 5230,
    remixes: 211,
    timeAgo: "14h",
  },
  {
    id: "p6",
    creator: creators.sol,
    image: "/art/crystal-bloom.png",
    aspect: "square",
    title: "Bloom in Refraction",
    prompt:
      "macro photography of an otherworldly crystal flower blooming, iridescent translucent petals refracting light, pitch black background, ultra detailed, teal and warm highlights, focus stacking, studio macro lens, hyperreal",
    negativePrompt: "noise, jpeg artifacts, dull colors",
    model: "Stable Diffusion 3.5 L",
    tools: ["SD 3.5", "ComfyUI"],
    seed: "6677001",
    steps: 45,
    cfg: 6,
    likes: 20733,
    comments: 491,
    saves: 9008,
    remixes: 274,
    timeAgo: "1d",
    topComment: {
      handle: "lumastudio",
      text: "this would print so well. dropping in the marketplace?",
    },
  },
]

export const trendingPrompts = [
  { tag: "liquid chrome", posts: "12.4K" },
  { tag: "cinematic portrait", posts: "48.1K" },
  { tag: "floating city", posts: "9.2K" },
  { tag: "bioluminescent", posts: "6.7K" },
  { tag: "synthwave desert", posts: "15.3K" },
  { tag: "macro crystal", posts: "4.1K" },
]

export const suggestedCreators: Creator[] = [
  creators.orion,
  creators.sol,
  creators.echo,
]

export const drops = [
  { id: "d1", creator: creators.nova, label: "Your story" },
  { id: "d2", creator: creators.kai, label: "kaipromptlab" },
  { id: "d3", creator: creators.orion, label: "orionvale" },
  { id: "d4", creator: creators.luma, label: "lumastudio" },
  { id: "d5", creator: creators.echo, label: "echodreams" },
  { id: "d6", creator: creators.sol, label: "solmacro" },
]
