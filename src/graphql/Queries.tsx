import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql `
    query Brands($endIndex: Float!, $startIndex: Float!) {
        brands(endIndex: $endIndex, startIndex: $startIndex) {
        _id
        cover_image
        }
    }
`
export const QUERY_ALL_VIDEOS = gql `
query AllVideos($endIndex: Float!, $startIndex: Float!) {
    allVideos(endIndex: $endIndex, startIndex: $startIndex) {
      _id
      activity_updated
      boosts
      boosts_count
      brandtags
      campaign {
        _id
        brand {
          country
          brandtag
          _id
          profile_picture
          name
        }
        country
        description
        hashtag
        name
        short_description
      }
      comments_count
      coverImageTime
      hashtags
      likes_count
      location {
        address
        cc
        city
        country
        loc {
          coordinates
          type
        }
        name
        state
      }
      magnetic_heading
      modified
      private
      process_status
      published
      recorded_location {
        coordinates
        type
      }
      reports_count
      review_status
      shared_count
      short_id
      title
      views_count
    }
  }
`

export const GET_VIDEO_LIST = gql `
query AllVideos($endIndex: Float!, $startIndex: Float!) {
    allVideos(endIndex: $endIndex, startIndex: $startIndex) {
      _id
      activity_updated
      boosts
      boosts_count
      brandtags
      campaign {
        _id
        brand {
          country
          brandtag
          _id
          profile_picture
          name
        }
        country
        description
        hashtag
        name
        short_description
      }
      comments_count
      coverImageTime
      hashtags
      likes_count
      location {
        address
        cc
        city
        country
        loc {
          coordinates
          type
        }
        name
        state
      }
      magnetic_heading
      modified
      private
      process_status
      published
      recorded_location {
        coordinates
        type
      }
      reports_count
      review_status
      shared_count
      short_id
      title
      views_count
    }
  }
`