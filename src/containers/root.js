'use strict';
import Index from './';
import { GatherCall, Gather } from './mobile';

export default {
    component: Index,
    path: '/',
    childRoutes: [
        {
            component: GatherCall,
            path: 'elim',
            title: '聚会点名'
        },
        {
            component: Gather,
            path: 'gather',
            title: '聚会签到'
        }
    ]
}