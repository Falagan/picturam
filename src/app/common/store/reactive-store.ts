
import * as _ from 'lodash';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export abstract class SimpleReactiveStore {
    private statePropsSubjects: any;
    private stateSubject: Subject<any>;
    public state!: any;

    constructor() {
        this.statePropsSubjects = {};
        this.stateSubject = new Subject();
    }

    /**
     * Initializes store with the given object props
     * @param initialState
     */
    public initializeStore(initialState: any) {
        this.state = _.cloneDeep(initialState);
        const keysInitial = Object.keys(initialState);
        for (let e = 0; e < keysInitial.length; e++) {
            this.statePropsSubjects[keysInitial[e]] = new BehaviorSubject<any>(initialState[keysInitial[e]]);
        }
        this.stateSubject.next(this.state);
    }

    public getState(): any {
        return _.cloneDeep(this.state);
    }

    public setState(newState: any) {
        this.state = _.cloneDeep(newState);
        this.stateSubject.next(this.state);
        const keysState: string[] = Object.keys(this.state);
        for (let i = 0; i < keysState.length; i++) {
            this.statePropsSubjects[keysState[i]].next(_.cloneDeep(this.state[keysState[i]]));
        }
    }

    public set(prop: string, value: any) {
        const currentState:any = this.getState();
        currentState[prop] = value;
        this.statePropsSubjects[prop].next(_.cloneDeep(currentState[prop]));
        this.state = currentState;
        this.stateSubject.next(this.state);
    }

    public get(prop: string) {
        return this.state[prop];
    }

    public getPropsState(props: string[]): any {
        const currentState:any = this.getState();
        const result:any = {};
        for (let f = 0; f < props.length; f++) {
            result[props[f]] = currentState[props[f]];
        }
        return result;
    }

    public bind$(prop: string): Observable<any> {
        return this.statePropsSubjects[prop].asObservable();
    }

    public bindState$(): Observable<any> {
        return this.stateSubject.asObservable();
    }
    
}