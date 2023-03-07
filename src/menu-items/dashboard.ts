// assets
import {
  HomeOutlined,
  UserOutlined,
  BgColorsOutlined,
  FormatPainterOutlined,
  CloudSyncOutlined,
  DollarCircleOutlined,
  FunctionOutlined,
  BookOutlined,
  ContactsOutlined,
  MenuOutlined,
  BuildOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { opciones } from "../constants/opciones";
import { roles, gruposDeRoles } from "../constants/Roles";
// icons

const icons = {
  HomeOutlined,
  UserOutlined,
  BgColorsOutlined,
  FormatPainterOutlined,
  CloudSyncOutlined,
  FunctionOutlined,
  DollarCircleOutlined,
  BookOutlined,
  ContactsOutlined,
  MenuOutlined,
  BuildOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: "group-dashboard",
  title: "",
  type: "group",
  children: [
    {
      id: opciones.menuVender,
      title: "Solicitud",
      type: "item",
      url: "/venta",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level4,
      optionId: opciones.menuVender,
    },
    {
      id: opciones.menuLibros,
      title: "Autoridades",
      type: "item",
      url: "/libros",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level4,
      optionId: opciones.menuLibros,
    },
    {
      id: opciones.menuColores,
      title: "Personas",
      type: "item",
      url: "/colores",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level4,
      optionId: opciones.menuColores,
    },

    {
      id: opciones.menuFormulas,
      title: "Tipos de beneficios",
      type: "item",
      url: "/formulas",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level4,
      optionId: opciones.menuFormulas,
    },
    {
      id: opciones.menuListasPrecio,
      title: "Liquidaciones",
      type: "item",
      url: "/listaDePrecios",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level3,
      optionId: opciones.menuListasPrecio,
    },
    {
      id: opciones.menuRentabilidad,
      title: "Reportes",
      type: "item",
      url: "/rentabilidad",
      icon: icons.BookOutlined,
      breadcrumbs: false,
      admitedRoles: gruposDeRoles.level3,
      optionId: opciones.menuRentabilidad,
    },
  ],
};

export default dashboard;
