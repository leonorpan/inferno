import rootlisteners from "./shared/rootlisteners";
import events from "./shared/events";

export default ( parentDom, component, listenerName ) => {

    var listeners = rootlisteners[events[listenerName]];
    var index = 0;
    while ( index < listeners.length ) {

        if ( listeners[index].target === parentDom ) {

            listeners.splice( index, 1 );
            index = 0;

        }
        index++;

    }

};
