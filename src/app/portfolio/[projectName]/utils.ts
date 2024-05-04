export function getProject(data: any, urlName: string) {
    //@ts-ignore
    return data.projectsData.find(project => project.urlName === urlName);
}

