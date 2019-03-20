'use strict';
import Index from './';
import { ElimGatherCall, ElimGather, ElimMankDx, ElimMankZm, ElimMank } from './mobile';

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
        },
        {
            component: ElimMankDx,
            path: 'elim-mank-dx',
            title: '小组关怀链·弟兄'
        },
        {
            component: ElimMankZm,
            path: 'elim-mank-zm',
            title: '小组关怀链·姊妹'
        },
        {
            component: ElimMank,
            path: 'elim-mank',
            title: '小组关怀链'
        }
    ]
}