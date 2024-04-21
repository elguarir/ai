import { LanguageModelV1LogProbs } from "@ai-sdk/provider";

type OpenAICompletionLogProps =  {
  tokens: string[];
  token_logprobs: number[];
  top_logprobs: Record<string, number>[] | null;
  text_offset: number[];
}

export function mapOpenAICompletionLogProbs(logprobs: OpenAICompletionLogProps): LanguageModelV1LogProbs {
  return logprobs.tokens.map((token, index) => ({
    token,
    logprob: logprobs.token_logprobs[index],
    top_logprobs: logprobs.top_logprobs ? Object.entries(logprobs.top_logprobs[index]).map(([token, logprob]) => ({
      token,
      logprob,
    })) : [],
  }))
}