import { Routes, UrlMatchResult, UrlSegment } from '@angular/router';

export const routes: Routes = [
    {
        matcher: (url: UrlSegment[]): UrlMatchResult | null => {
            const routeA = url.length > 1 && url.at(-1)?.path === 'route-a';
            const slug = url.at(-1);
            console.debug('editorialPage', url, routeA, slug);
            // return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
            return !routeA && slug
                ? { consumed: url, posParams: { slug: slug } }
                : null;
        }
        , loadComponent: () => import('./routes/route-a/route-a.component').then(c => c.RouteAComponent)
    },
    {
        matcher: (url: UrlSegment[]): UrlMatchResult | null => {
            const routeB = url.length > 1 && url.at(-1)?.path === 'route-b';
            const slug = url.at(-1);
            console.debug('editorialPage', url, routeB, slug);
            // return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
            return !routeB && slug
                ? { consumed: url, posParams: { slug: slug } }
                : null;
        }
        , loadComponent: () => import('./routes/route-b/route-b.component').then(c => c.RouteBComponent)
    },
    {
        path: '**', loadComponent: () => import('./routes/route-c/route-c.component').then(c => c.RouteCComponent)
    }
];
