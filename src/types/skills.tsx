import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";

export type Skill = {
    title: string;
    description?: string;
    icon: IconName;
    iconType: IconPrefix;
    color: string;
}

