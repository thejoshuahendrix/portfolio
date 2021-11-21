import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";


export type Badge = {
    title: string;
    description?: string;
    icon: IconName;
    iconType: IconPrefix;
}