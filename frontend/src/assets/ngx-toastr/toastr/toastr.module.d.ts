import { ModuleWithProviders } from '@angular/core';
import { GlobalConfig } from './toastr-config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './toast.component';
import * as ɵngcc2 from '@angular/common';
export declare const DefaultGlobalConfig: GlobalConfig;
export declare class ToastrModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<ToastrModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ToastrModule, [typeof ɵngcc1.Toast], [typeof ɵngcc2.CommonModule], [typeof ɵngcc1.Toast]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ToastrModule>;
}
export declare class ToastrComponentlessModule {
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders<ToastrModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ToastrComponentlessModule, never, [typeof ɵngcc2.CommonModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ToastrComponentlessModule>;
}

//# sourceMappingURL=toastr.module.d.ts.map