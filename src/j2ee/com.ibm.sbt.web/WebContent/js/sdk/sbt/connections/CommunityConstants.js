/*
 * � Copyright IBM Corp. 2012,2013
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
 * implied. See the License for the specific language governing 
 * permissions and limitations under the License.
 */

/**
 * Social Business Toolkit SDK. Definition of constants for CommunityService.
 * 
 * @module sbt.connections.CommunityConstants
 */
define([ "../lang", "./ConnectionsConstants" ], function(lang,conn) {

    return lang.mixin({
        
        /**
         * Public community
         * 
         * @property Public
         * @type String
         * @for sbt.connections.Community
         */
        Public : "public",

        /**
         * Moderated community
         * 
         * @property Moderated
         * @type String
         * @for sbt.connections.Community
         */
        Moderated : "publicInviteOnly",

        /**
         * Restricted community
         * 
         * @property Restricted
         * @type String
         * @for sbt.connections.Community
         */
        Restricted : "private",

        /**
         * Community owner
         * 
         * @property Owner
         * @type String
         * @for sbt.connections.Member
         */
        Owner : "owner",
        
        /**
         * Community member
         * 
         * @property Member
         * @type String
         * @for sbt.connections.Member
         */
        Member : "member",
        
        /**
         * XPath expressions used when parsing a Connections Communities ATOM feed
         * 
         * @property CommunityFeedXPath
         * @type Object
         * @for sbt.connections.CommunityService
         */
        CommunityFeedXPath : conn.ConnectionsFeedXPath,

        /**
         * XPath expressions to be used when reading a Community Entry
         * 
         * @property CommunityXPath
         * @type Object
         * @for sbt.connections.CommunityService
         */
        CommunityXPath : {
            // used by getEntityData
            entry : "/a:entry",
            // used by getEntityId
            uid : "a:id",
            // used by getters
            communityUuid : "a:id",
            communityTheme : "snx:communityTheme",
            title : "a:title",
            summary : "a:summary[@type='text']",
            communityUrl : "a:link[@rel='alternate']/@href",
            communityAtomUrl : "a:link[@rel='self']/@href",
            logoUrl : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/logo']/@href",
            tags : "a:category[not(@scheme)]/@term",
            content : "a:content[@type='html']",
            memberCount : "snx:membercount",
            communityType : "snx:communityType",
            published : "a:published",
            updated : "a:updated",
            authorUserid : "a:author/snx:userid",
            authorName : "a:author/a:name",
            authorEmail : "a:author/a:email",
            contributorUserid : "a:contributor/snx:userid",
            contributorName : "a:contributor/a:name",
            contributorEmail : "a:contributor/a:email"
        },
        
        /**
         * XPath expressions to be used when reading a Community Member Entry
         * 
         * @property MemberXPath
         * @type Object
         * @for sbt.connections.CommunityService
         */
        MemberXPath : {
            // used by getEntityData
            entry : "/a:entry",
            // used by getEntityId
            uid : "a:contributor/snx:userid",
            // used by getters
            userid : "a:contributor/snx:userid",
            name : "a:contributor/a:name",
            email : "a:contributor/a:email",
            role : "snx:role"
        },

        /**
         * XPath expressions to be used when reading a Community Invite Entry
         * 
         * @property InviteXPath
         * @type Object
         * @for sbt.connections.CommunityService
         */
        InviteXPath : {
            // used by getEntityData
            entry : "/a:entry",
            // used by getEntityId
            uid : "a:id",
            // used by getters
            inviteUuid : "a:id",
            title : "a:title",
            content : "a:content[@type='text']",
            updated : "a:updated",
            authorUserid : "a:author/snx:userid",
            authorName : "a:author/a:name",
            contributorUserid : "a:contributor/snx:userid",
            contributorName : "a:contributor/a:name",
            contributorEmail : "a:contributor/a:email",
            contributorUserState : "a:contributor/snx:userState",
            communityUuid : "snx:communityUuid",
            communityUrl : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/community']/@href",
            editUrl : "a:link[@rel='edit']/@href"
        },
        
        EventXPath : {
            // used by getEntityData
            entry : "/a:entry",
            // used by getEntityId
            uid : "a:id",
            // used by getters
            eventUuid : "snx:eventUuid",
            eventInstUuid : "snx:eventInstUuid",
            title : "a:title",
            eventAtomUrl : "a:link[@rel='self']/@href",
            content : "a:content[@type='html']",
            location : "snx:location",
            authorUserid : "a:author/snx:userid",
            authorName : "a:author/a:name",
            authorEmail : "a:author/a:email",
            authorState : "a:author/snx:userState",
            updated : "a:updated",
            communityLink : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/container']/@href",
            eventAtomInstances : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/calendar/event/instances']/@href",
            eventAtomAttendees : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/calendar/event/attend']/@href",
            eventAtomFollowers : "a:link[@rel='http://www.ibm.com/xmlns/prod/sn/calendar/event/follow']/@href",
            frequency : "snx:recurrence/@frequency",
            interval : "snx:recurrence/@interval",
            until : "snx:recurrence/snx:until",
            allDay : "snx:recurrence/snx:allday",
            startDate : "snx:recurrence/snx:startDate",
            endDate : "snx:recurrence/snx:endDate",
            byDay : "snx:recurrence/snx:byDay"
        },

        /**
         * asc  Specifies whether the results should be displayed in ascending order. Options are true or false.
         * email   Internet email address. Search for communities of which the user you specify by email address is a member.
         * ps  Page size. Specify the number of entries to return per page.
         * search  Well-formed full text search query. Performs a text search on community titles and descriptions.
         * since   Includes in the resulting feed all communities updated after a specified date. Specify the date using a date-time value that conforms to RFC3339. Use an upper case "T" to separate the date and time, and an uppercase "Z" in the absence of a numeric time zone offset. For example: 2009-01-04T20:32:31.171Z.
         * sortField   Order in which to sort the results. Options are:
         *                                          lastmod � Sorts the results by last modified date.
         *                                          name � Sorts the results by entry name.
         *                                          count � Sorts the results by relevance.
         * tag Returns communities with the specified tag. Search by one tag at a time.
         * userid  Unique ID that represents a specific person.
         */
        
        /**
         * A feed of all public communities.
         *  
         * Get the All Communities feed to see a list of all public communities to which the authenticated user has access or pass in parameters to search for communities that match a specific criteria.
         * 
         * Supports: asc, email, ps, search, since, sortField, tag, userid
         * 
         * @property AtomCommunitiesAll
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunitiesAll : "/${communities}/service/atom/communities/all",

        /**
         * A feed of communities of which the authenticated user is a member.
         * 
         * Get the My Communities feed to see a list of the communities to which the authenticated user is a member or pass in parameters to search for a subset of those communities that match a specific criteria.
         * 
         * Supports: asc, email, ps, search, since, sortField, tag, userid
         * 
         * @property AtomCommunitiesMy
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunitiesMy : "/${communities}/service/atom/communities/my",
        
        /**
         * A feed of invitations.
         * 
         * Get a list of the outstanding community invitations of the currently authenticated user or provide parameters to search for a subset of those invitations.
         * 
         * Supports: asc, ps, search, since, sortField
         * 
         * @property AtomCommunityInvitesMy
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityInvitesMy : "/${communities}/service/atom/community/invites/my",
        
        /**
         * URL to delete/create Community Invites
         * 
         * @property AtomCommunityInvites
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityInvites : "${communities}/service/atom/community/invites",
        
        /**
         * A feed of subcommunities.
         * 
         * Get a list of subcommunities associated with a community.
         * 
         * Supports: asc, page, ps, since, sortBy, sortOrder, sortField
         * 
         * @property AtomCommunitySubCommunities
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunitySubCommunities : "${communities}/service/atom/community/subcommunities",
            
        /**
         * A feed of members.
         * 
         * Retrieve the members feed to view a list of the members who belong to a given community.
         * 
         * Supports: asc, email, page, ps, role, since, sortField, userid
         * 
         * @property AtomCommunityMembers
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityMembers : "${communities}/service/atom/community/members",
        
        /**
         * A community entry.
         * 
         * @property AtomCommunityInstance
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityInstance : "${communities}/service/atom/community/instance",
        
        /**
         * Get a feed that includes the topics in a specific community forum.
         * 
         * @property AtomCommunityForumTopics
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityForumTopics : "/${communities}/service/atom/community/forum/topics",
        
        /**
         * Get a feed of a Community's bookmarks. Requires a url parameter of the form communityUuid=xxx
         * @property AtomCommunityBookmarks
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityBookmarks : "/${communities}/service/atom/community/bookmarks",
        
        /**
         * Get a feed of a Community's events.
         * 
         * Required url parameters: 
         *   calendarUuid - The uuid of the community to get events from.
         *   
         *   startDate and/or endDate. At least one of these must be present. Format is any date-time that conforms to rfc3339. 
         *   startDate - Include events that end after this date.
         *   endDate - Include events that end before this date.
         *   
         * Optional Url parameters
         *   page - Page number, specifies the page to be returned. Default value is page 1.
         *   ps - Page size. Number of entries to return per page. Defaule value is 10, max is 100.
         *   tags - Tag filter, only return events with these tags. Multiple tags are separated using +, e.g. tag1+tag2
         *   
         * @property AtomCommunityEvents
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityEvents : "/${communities}/calendar/atom/calendar/event",
        
        /**
         * Get full atom event.
         * 
         * Required url parameters: 
         *   eventInstUuid - The uuid of the event, gotten from the AtomCommunityEvents feed.
         *   
         * @property AtomCommunityEvent
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityEvent : "/${communities}/calendar/atom/calendar/event",
        
        /**
         * Obtain a full representation of the invitations as an Atom entry document.
         * 
         * @property AtomCommunityInvites
         * @type String
         * @for sbt.connections.CommunityService
         */
        AtomCommunityInvites : "/${communities}/service/atom/community/invites"
        
    }, conn);
});