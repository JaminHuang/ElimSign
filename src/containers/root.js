'use strict';
import Index from './';
import { ElimGatherCall, ElimGather } from './mobile';

export default {
    component: Index,
    path: '/',
    childRoutes: [
        {
            component: ElimGatherCall,
            path: 'elim-call',
            title: '聚会点名'
        },
        {
            component: ElimGather,
            path: 'elim-gather',
            title: '聚会签到'
        }
    ]
}