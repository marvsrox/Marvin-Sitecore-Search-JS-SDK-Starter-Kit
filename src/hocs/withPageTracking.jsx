import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageController, trackEntityPageViewEvent, trackPageViewEvent } from '@sitecore-search/react';

import { ENTITY_CONTENT, PAGE_EVENTS_DEFAULT, PAGE_EVENTS_ENTITY_PAGE } from '../data/constants';
import useUri from '../hooks/useUri';

export const PageEventContext = React.createContext({});
/**
 * The page view event is handled in sitecore SDK, but for SPA it just happens on the first time.
 * So when user navigate is needed to track the page view event manually.
 * This is the purpose of this hoc, set page uri and track the page view event
 */
const withPageTracking =
  (Component, pageType = PAGE_EVENTS_DEFAULT) =>
    function InnerComponent(props) {
      const uri = useUri();
      const { id } = useParams();
      
      useEffect(() => {
        PageController.getContext().setPageUri(uri);
        if (id && pageType === PAGE_EVENTS_ENTITY_PAGE) {
          console.log(id);
          trackEntityPageViewEvent(ENTITY_CONTENT, {items : [{ id: id }]});
        } else {
          trackPageViewEvent(pageType);
        }
      }, [uri, id]);

      return (
        <PageEventContext.Provider value={pageType}>
          <Component {...{ props }} />
        </PageEventContext.Provider>
      );
    };

export default withPageTracking;
