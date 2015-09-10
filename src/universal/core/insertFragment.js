import destroyFragment from "./destroyFragment";

export default ( context, parentDom, domNode, nextFragment, replace ) => {

    var noDestroy = false;
    if ( nextFragment ) {

        var domNextFragment = nextFragment.dom;
        if ( !domNextFragment ) {

            domNextFragment = nextFragment;
            parentDom = domNextFragment.parentNode;
            noDestroy = true;

        }
        if ( replace ) {

            if ( noDestroy === false ) {

                destroyFragment( context, nextFragment );

            }
            parentDom.replaceChild( domNode, domNextFragment );

        } else {

            parentDom.insertBefore( domNode, domNextFragment );

        }

    } else {

        parentDom.appendChild( domNode );

    }

};
