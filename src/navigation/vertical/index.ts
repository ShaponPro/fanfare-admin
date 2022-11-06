import { VerticalNavItemsType } from "src/@core/layouts/types";

// ** Icon imports
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CampaignIcon from "@mui/icons-material/Campaign";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import FestivalIcon from "@mui/icons-material/Festival";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import VideocamIcon from "@mui/icons-material/Videocam";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      icon: AlarmOnIcon,
      path: "/dashboard",
    },
    {
      title: "videos",
      icon: VideocamIcon,
      path: "/videos",

      children: [
        {
          title: "Video Analytics",
          path: "/videos/analytics",
        },
        {
          title: "List Videos",
          path: "/videos",
        },
        {
          title: "User Videos",
          path: "/videos/list-videos/user-videos",
        },
        {
          title: "Brand Videos",
          path: "/videos/list-videos/brand-videos",
        },
        {
          title: "Tutorial",
          path: "/videos/list-videos/tutorial",
        },
        {
          title: "Youtube Crawler",
          path: "/videos/youtube-crawler",
        },
        {
          title: "Upload a Video",
          path: "/videos/upload-videos",
        },
        {
          title: "Download Code",
          path: "/videos/download-code",
        },
        {
          title: "Content Restriction",
          path: "/videos/content-restrictions",
        },
      ],
    },
    {
      title: "Ad Centre",
      icon: CampaignIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Analytics",
      icon: AnalyticsIcon,
      path: "/acl",
      action: "hover",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "content & Contests",
      icon: ContentPasteIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Manage All Brand",
      icon: BrandingWatermarkIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Shopping Centre",
      icon: LocalMallIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Collaboration & Events",
      icon: FestivalIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Video Tags & Catagory",
      icon: TagRoundedIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Fanfare Music",
      icon: LibraryMusicRoundedIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Users",
      icon: PeopleIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Notification",
      icon: NotificationsIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Transaction",
      icon: PaidIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Access Manager",
      icon: PhonelinkLockIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Manage Your Profile",
      icon: AccountCircleIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
    {
      title: "Privacy & Policy",
      icon: PhonelinkLockIcon,
      path: "/acl",
      action: "read",
      subject: "acl-page",
      children: [
        {
          title: "Video Analytics",
          path: "/ui/cards/basic",
        },
        {
          title: "List Videos",
          path: "/ui/cards/statistics",
        },
        {
          title: "User Videos",
          path: "/ui/cards/advanced",
        },
        {
          title: "Brand Videos",
          path: "/ui/cards/gamification",
        },
        {
          title: "Tutorial",
          path: "/ui/cards/actions",
        },
        {
          title: "Youtube Crawler",
          path: "/ui/cards/widgets",
        },
        {
          title: "Upload a Video",
          path: "/ui/cards/widgets",
        },
        {
          title: "Download Code",
          path: "/ui/cards/widgets",
        },
        {
          title: "Content Restriction",
          path: "/ui/cards/widgets",
        },
      ],
    },
  ];
};

export default navigation;
