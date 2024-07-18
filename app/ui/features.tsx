import {
  CheckListIcon,
  Edit01Icon,
  hugeiconsLicense,
  MapsLocation02Icon,
  Message02Icon,
  RouteBlockIcon,
  Share08Icon,
  TickDouble01Icon,
  UserCheck01Icon,
  UserGroupIcon,
  ViewOffIcon,
  WorkoutRunIcon,
} from "@hugeicons/react-pro";

hugeiconsLicense(
  "890e3333f427f30eb0b744e4d32392a6RT00NzkxODg2MzcwMDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QjVBMzQ1NzMsRVQ9MDIxMUY0RkM=",
);

const features = [
  {
    icon: <WorkoutRunIcon size={20} className="text-blue-500" variant="twotone" />,
    backgroundIconColor: "bg-blue-500/20",
    title: "Discover Activities",
    description:
      "Get access to unlimited activities such as hiking, camping, bike riding, Drives, Sunset watching etc",
  },
  {
    icon: <RouteBlockIcon size={20} className="text-yellow-500" variant="twotone" />,
    backgroundIconColor: "bg-yellow-500/20",
    title: "Discover & Visit Places",
    description:
      "Access hiking places, parks, mountains and all the fun places you love. You can also plan your trips.",
  },
  {
    icon: <Edit01Icon size={20} className="text-rose-500" variant="twotone" />,
    backgroundIconColor: "bg-rose-500/20",
    title: "Create Activities",
    description:
      "Planning a free or payable hiking, biking or even a camping trip? Create it and invite others.",
  },
  {
    icon: <UserGroupIcon size={20} className="text-indigo-500" variant="twotone" />,
    backgroundIconColor: "bg-indigo-500/20",
    title: "Follow Different Groups, Places & Members",
    description:
      "Whether you like biking or camping or specific people, you can follow them and keep updated when they post.",
  },
  {
    icon: <Share08Icon size={20} className="text-pink-600" variant="twotone" />,
    backgroundIconColor: "bg-pink-600/20",
    title: "Share your Activities",
    description:
      "A 20K hike is such a great achievement, why don’t you share that with friends on Whatsapp or Instagram.",
  },
  {
    icon: <Message02Icon size={20} className="text-orange-500" variant="twotone" />,
    backgroundIconColor: "bg-orange-500/20",
    title: "Comment and like community posts",
    description:
      "Make those posts interactive by commenting or liking posts from the community.",
  },
  {
    icon: <CheckListIcon size={20} className="text-indigo-600" variant="twotone" />,
    backgroundIconColor: "bg-indigo-600/20",
    title: "Create Your List",
    description:
      "You like an activity but don’t have time yet to join in, create you own list and revisit later.",
  },
  {
    icon: <UserCheck01Icon size={20} className="text-green-500" variant="twotone" />,
    backgroundIconColor: "bg-green-500/20",
    title: "Vetted Activity Planners",
    description:
      "Whether you like biking or camping or specific people, you can follow them and keep updated when they post.",
  },
  {
    icon: <TickDouble01Icon size={20} className="text-yellow-500" variant="twotone" />,
    backgroundIconColor: "bg-yellow-500/20",
    title: "Track Your Progress",
    description:
      "Check different activities you have participated in the past. When you decide to, for example, hike a place, we’ll track that.",
  },
  {
    icon: <MapsLocation02Icon size={20} className="text-blue-500" variant="twotone" />,
    backgroundIconColor: "bg-blue-500/20",
    title: "Maps to Different Places",
    description:
      "Get a detailed location details to different places or activities. ",
  },
  {
    icon: <ViewOffIcon size={20} className="text-pink-500"  variant="twotone"/>,
    backgroundIconColor: "bg-pink-500/20",
    title: "No Ads",
    description: "Yup, no adverts.",
  },
];

export default function Features() {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-4 py-8 md:py-16">
          <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 2xl:col-start-4 2xl:col-span-6">
            <div className="md:w-1/2 mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2.5">
                For only <span className="text-primary font-bold">US$1.00</span> a month,
                you get tour guides, organise experiences and create communities.
              </p>

              <p className="text-13 md:text-16 font-normal text-gray-600">
                Register as a tour guide and earn by giving people a tour of some
                of your favorite places. Have an event coming up? Sell your
                tickets on Oltukai. Have an interest and would like to hang out
                with like-minded people? Create your community on Oltukai.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature) => (
                  <div key={feature.title} className="flex flex-col mb-4 gap-x-2">
                    <div
                        className={`flex mb-2 rounded-full h-10 w-10 items-center justify-center ${feature.backgroundIconColor}`}
                    >
                      {feature.icon}
                    </div>

                    <div className="flex-col">
                      <p className="text-gray-700 font-semibold text-13 md:text-16 mb-1">
                        {feature.title}
                      </p>
                      <p className="text-13 md:text-16 text-gray-700 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      <div className="bg-[#F9FAFB] absolute top-0 bottom-0 left-0 right-0 -z-[1]">
        <div className="h-full grid grid-cols-12 md:grid-cols-6 2xl:grid-cols-12 2xl:col-start-3 divide-x divide-dashed divide-gray-200">
          <div className="2xl:col-start-3" />
          <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
          <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
          <div className="2xl:col-span-2 col-span-3 md:col-span-1" />
          <div className="2xl:col-span-2" />
        </div>
      </div>
    </div>
  );
}
