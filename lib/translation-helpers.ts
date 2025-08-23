import type { Service } from "@/types/services";
import type { ServiceDetail } from "@/types/service-detail";
import type { Project } from "@/types/projects";

// Generic resolve from tx() with fallback to defaultValue
export function resolveTx<T = any>(tx: (key: string) => any, key: string, defaultValue: T): T {
  const v = tx(key);
  return (v === undefined || v === null) ? defaultValue : (v as T);
}

// Services list (services-data.ts)
export function getTranslatedService(service: Service, tx: (key: string) => any): Service {
  const base = `services.list.${service.id}`;
  return {
    ...service,
    title: resolveTx(tx, `${base}.title`, service.title),
    description: resolveTx(tx, `${base}.description`, service.description),
    features: service.features
      ? resolveTx(tx, `${base}.features`, service.features)
      : undefined,
  };
}

// Service detail (services-content.ts)
export function getTranslatedServiceDetail(detail: ServiceDetail, tx: (key: string) => any): ServiceDetail {
  const base = `services.details.${detail.slug}`;
  return {
    ...detail,
    title: resolveTx(tx, `${base}.title`, detail.title),
    description: resolveTx(tx, `${base}.description`, detail.description),
    detailedDescription: resolveTx(tx, `${base}.detailedDescription`, detail.detailedDescription),
    benefits: resolveTx(tx, `${base}.benefits`, detail.benefits),
    serviceTypes: resolveTx(tx, `${base}.serviceTypes`, detail.serviceTypes),
    heroImageAlt: resolveTx(tx, `${base}.heroImageAlt`, detail.heroImageAlt),
    ctaTitle: resolveTx(tx, `${base}.ctaTitle`, detail.ctaTitle),
    ctaDescription: resolveTx(tx, `${base}.ctaDescription`, detail.ctaDescription),
    breadcrumb: {
      home: resolveTx(tx, `breadcrumb.home`, detail.breadcrumb.home),
      services: resolveTx(tx, `breadcrumb.services`, detail.breadcrumb.services),
      current: resolveTx(tx, `${base}.breadcrumbCurrent`, detail.breadcrumb.current),
    },
  };
}

// Projects list
export function getTranslatedProject(project: Project, tx: (key: string) => any): Project {
  const catKey = `projects.categories.${project.category}`;
  const base = `projects.items.${project.slug}`;
  return {
    ...project,
    title: resolveTx(tx, `${base}.title`, project.title),
    description: resolveTx(tx, `${base}.description`, project.description),
    category: resolveTx(tx, catKey, project.category) as any,
    completedDate: resolveTx(tx, `${base}.completedDate`, project.completedDate),
    location: resolveTx(tx, `${base}.location`, project.location ?? ""),
  };
}
