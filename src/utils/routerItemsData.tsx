import { Layer, Message, User } from "iconsax-react";

export const itemsData = [
  {
    id: 0,
    title: "Feed",
    icon: <Layer variant="TwoTone" size={24} />,
    link: "/feed",
  },
  {
    id: 1,
    title: "Criar",
    icon: <Message variant="TwoTone" size={24} />,
    link: "/create",
  },
  {
    id: 2,
    title: "Perfil",
    icon: <User variant="TwoTone" size={24} />,
    link: "/profile",
  },
];
