import data from "@/app/content.json";

export function getProject(data: any, name: string) {
    //@ts-ignore
    return data.projectsData.find(project => project.name === name);
}
