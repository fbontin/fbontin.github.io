module Main exposing (Model, init, menu, menuLeft, menuList, menuRight, update, view)

import Browser
import Browser.Navigation as Nav
import Data exposing (Experience, experiences, me)
import Html exposing (..)
import Html.Attributes exposing (..)
import Url


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    }


type Route
    = Home
    | About


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( Model key url, Cmd.none )


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


router : Model -> Html Msg
router model =
    case model.url.path of
        "/about" ->
            about model

        _ ->
            home model


view : Model -> Browser.Document Msg
view model =
    { title = "Filip Bontin"
    , body =
        [ div
            [ class "body" ]
            [ menu model
            , router model
            ]
        ]
    }



-- MENU


viewLink : String -> String -> Html Msg
viewLink title path =
    li
        [ class "pure-menu-item" ]
        [ a
            [ href path
            , class "pure-menu-link"
            , class "menu-item"
            ]
            [ text title ]
        ]


menuLeft : Model -> Html Msg
menuLeft model =
    div
        [ class "pure-u-2-5" ]
        [ div
            [ class "name" ]
            [ text me.name ]
        ]


menuList : Model -> Html Msg
menuList model =
    ul
        [ class "pure-menu-list" ]
        [ viewLink "home" "/"
        , viewLink "about" "/about"
        ]


menuRight : Model -> Html Msg
menuRight model =
    div
        [ class "pure-u-3-5" ]
        [ div
            [ class "menu" ]
            [ div
                [ class "pure-menu", class "pure-menu-horizontal" ]
                [ menuList model ]
            ]
        ]


menu : Model -> Html Msg
menu model =
    div
        [ class "pure-g", class "menu-bar" ]
        [ menuLeft model
        , menuRight model
        ]



-- HOME


face : Model -> Html Msg
face model =
    img [ class "face", src "../face.png" ] []


icon : String -> String -> String -> Model -> Html Msg
icon link iconClass iconName model =
    div [ class "pure-u-1-3" ]
        [ a
            [ class "icon", href link ]
            [ i [ class iconClass, class iconName, class "fa-lg" ] [] ]
        ]


icons : Model -> Html Msg
icons model =
    div
        [ class "icons" ]
        [ div
            [ class "pure-g" ]
            [ icon me.email "fas" "fa-envelope" model
            , icon me.github "fab" "fa-github" model
            , icon me.linkedin "fab" "fa-linkedin" model
            ]
        ]


home : Model -> Html Msg
home model =
    div
        [ class "home" ]
        [ face model
        , p [ class "name" ] [ text me.name ]
        , p [] [ text me.description ]
        , icons model
        ]



-- ABOUT


timelineEvent : Model -> Experience -> Html Msg
timelineEvent model event =
    div
        [ class "item" ]
        [ div [ class "title" ] [ text event.title ]
        , div [ class "text" ] [ text event.text ]
        , div [ class "date" ] [ text (event.startDate ++ " - " ++ event.endDate) ]
        ]


timeline : List Experience -> Model -> Html Msg
timeline events model =
    div
        [ class "timeline" ]
        (List.map (timelineEvent model) events)


about : Model -> Html Msg
about model =
    div
        [ class "about" ]
        [ p [] [ text "Here are some things I have done:" ]
        , section [] [ timeline experiences model ]
        ]
