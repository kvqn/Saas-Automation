"use server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import axios from "axios";

export const onDiscordConnect = async (
  channel_id: string,
  webhook_id: string,
  webhook_name: string,
  webhook_url: string,
  id: string,
  guild_id: string,
  guild_name: string,
) => {
  // check if webhook if params set
  if (webhook_id) {
    // check if webhook exists in db with userId
    const webhook = await db.discordWebhook.findFirst({
      where: {
        userId: id,
      },
      include: {
        connections: {
          select: {
            type: true,
          },
        },
      },
    });

    // if webhook DNE for this user, create new webhook
    if (!webhook) {
      await db.discordWebhook.create({
        data: {
          userId: id,
          webhookId: webhook_id,
          channelId: channel_id,
          guildId: guild_id,
          name: webhook_name,
          url: webhook_url,
          guildName: guild_name!,
          connections: {
            create: {
              userId: id,
              type: "Discord",
            },
          },
        },
      });
    }
  }
};

export const getDiscordConnectionURL = async () => {
  const user = await currentUser();
  if (user) {
    const webhook = await db.discordWebhook.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        url: true,
        name: true,
        guildName: true,
      },
    });
    return webhook;
  }
};

export const postContentToWebhook = async (content: string, url: string) => {
  console.log({ content });
  if (content != "") {
    const posted = await axios.post(url, { content });
    if (posted) {
      return { message: "Succes" };
    }
    return { message: "Failed Request" };
  }
  return { message: "No Content" };
};
